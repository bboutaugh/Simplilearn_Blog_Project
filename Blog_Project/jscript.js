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
    newBlog.classList.add("blog");

    //Append div to target area
    var divTarget = document.getElementById("new_blogs");
    divTarget.appendChild(newBlog);

}

function confirmMessage()
{
    var name = document.getElementById("contact_form").elements.name.value;
    var email = document.getElementById("contact_form").elements.email.value;
    var phone = document.getElementById("contact_form").elements.phone.value;
    var message = document.getElementById("contact_form").elements.message.value;
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    phoneRegex = /^\d{10}$/;

    if(name =="" || email == "" || phone =="" || message == "")
    {
        alert("Please fill out all form criteria.");
    }
    else if(!(emailRegex.test(email)))
    {
        alert("Incorrect email syntax. Please use correct syntax.");
    }
    else if(!(phoneRegex.test(phone)))
    {
        alert("Please enter a valid phone number.");
    }
    else
    {
      alert(
        "Thanks!..." + name + " we have noted your phone: " + phone +
         " and will contact you promptly at " + email + ". \n" + 
         "We will try to respond to the following message in the best way that we can...\n" +
         message 
        );  
    }
    
}