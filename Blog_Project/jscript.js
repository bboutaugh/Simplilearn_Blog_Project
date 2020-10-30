function addBlog()
{
    //Create the new blog div element and associated elements
    var newBlog = document.createElement("div");
    var newBlogP1 = document.createElement("p");
    var newBlogP2 = document.createElement("p");
    var newBlogH2 = document.createElement("h2");
    var newBlogBR = document.createElement("br");
    
    //Retrieve form values
    var formTitle = document.getElementById("add_blog_form").elements.blog_title.value;
    var formCategory = document.getElementById("add_blog_form").elements.blog_category.value;
    var formText = document.getElementById("add_blog_form").elements.blog_text.value;
   
    //Place form values into text nodes
    var blogTitle = document.createTextNode(formTitle);
    var blogCategory = document.createTextNode(formCategory);
    var blogText = document.createTextNode(formText);

    //Append text nodes to particular elements
    newBlogH2.appendChild(blogTitle);
    newBlogP1.appendChild(blogCategory);
    newBlogP2.appendChild(blogText);

    //Append elements to div
    newBlog.appendChild(newBlogH2);
    newBlog.appendChild(newBlogP1);
    newBlog.appendChild(newBlogBR);
    newBlog.appendChild(newBlogP2);

    //Append div to target area
    var divTarget = document.getElementById("new_blogs");
    divTarget.appendChild(newBlog);

}