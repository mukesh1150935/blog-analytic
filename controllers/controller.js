const _ = require('lodash');
const https = require('https');


// Function to fetch blog data from the API
const fetchBlogData =async (callback) => {
    const apiUrl = 'https://intent-kit-16.hasura.app/api/rest/blogs';
    const headers = {
      'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
    };
  
      await https.get(apiUrl, { headers: headers }, (apiRes) => {
      let data = '';
  
      apiRes.on('data', (chunk) => {
        data += chunk;
      });
  
      apiRes.on('end', () => {
        try {
          const apiResponse = JSON.parse(data);
          const blogs = apiResponse.blogs;
          callback(null, blogs);
        } catch (error) {
          callback(error, null);
        }
      });
    }).on('error', (error) => {
      callback(error, null);
    });
  };

// Memoize the fetchBlogData function with a caching period of maxAge (for now its 5 minutes in ms)
const memoizedData = _.memoize(fetchBlogData, undefined, (blogs) => 'cachedResult',{ maxAge: 300000 } );  

const blogStats=async(req,res)=>{
    // Use memoizedFetchBlogData instead of fetchBlogData
    memoizedData((error, blogs) => {
      if (error) {
        return res.status(500).json({ error: 'Error while fetching data from the API.' });
      }
  
      const totalBlogs = blogs.length;
      const longestBlog = _.maxBy(blogs, 'title.length');
      const privacyBlogs = blogs.filter(blog => blog.title.toLowerCase().includes('privacy'));
      const uniqueBlogTitles = _.uniqBy(blogs, 'title').map(blog => blog.title);
  
      res.status(200).json({
        totalBlogs: totalBlogs,
        longestBlogTitle: longestBlog.title,
        privacyBlogsCount: privacyBlogs.length,
        uniqueBlogTitles: uniqueBlogTitles
      });
    });
  }

  const blogSearch=async(req,res)=>{
    const query = req.query.query.toLowerCase();
  
    // Use memoizedFetchBlogData instead of fetchBlogData
    memoizedData((error, blogs) => {
      if (error) {
        return res.status(500).json({ error: 'Error fetching data from the API.' });
      }
  
      // Implement search functionality using cached blog data
      const matchingBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(query));
  
      res.status(200).json(matchingBlogs);
    });
  }

module.exports={blogStats,blogSearch};