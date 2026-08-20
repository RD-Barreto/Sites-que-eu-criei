'use strict'
const switcher = document.querySelector('.btn');
    switcher.addEventListener('click',function()
        {document.body.classlist.toggle('dark-theme')
            var classname = document.body.className;
        if(classname == "light-theme") {
            this.textcontent = "dank";
        }       
    console.log('current class name:' + classname);
 });
