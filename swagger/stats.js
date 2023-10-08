/**
 * @swagger
 * components:
 *  securitySchemes:
 *  schemas:
*/


/**
 * @swagger
 * /api/blog-stats:
 *  get:
 *      tags: ['Stats']
 *      summary: return blog analytics 
 *      responses:
 *          '200':    
 *              description: return blog count and other information
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  
 *                              totalBlogs:
 *                                  type: Number
 *                                  description: count of total number of blogs
 *                              longestBlogTitle:
 *                                  type: string
 *                                  description: title of blog whose title is longest in length
 *                              privacyBlogCount: 
 *                                  type: Number
 *                                  description: count of blogs having title containg privacy
 *                              uniqueBlogTitle:
 *                                  type: Array
 *                                  description: all unique titles
 * 
 *                              
 *          '500':
 *              description: could not fetch data!
 */


/**
 * @swagger
 * /api/blog-search:
 *  get:
 *      tags: ['Stats']
 *      summary: return all blogs with title having particular query
 *      parameters:
 *       - in: query
 *         name: query
 *         type: String
 *         default: ""
 *      responses:
 *          '200':    
 *              description: return all blogs with title having query 
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  
 *                              id:
 *                                  type: string
 *                                  description: id of a paticular blog
 *                              img_url:
 *                                  type: string
 *                                  description: link of image of particular blog
 *                              title: 
 *                                  type: string
 *                                  description: title/heading of blog
 *                              
 * 
 *                              
 *          '500':
 *              description: could not fetch data!
 */

