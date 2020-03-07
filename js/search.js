var database=[
			{course_title:'Web Development',course_instructor:'Cutting Edge',course_category:'Computer Science',course_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.',
				course_students:'10',course_price:'FREE',course_ratings:'4.5',course_image:'course_1.jpeg'},
				{course_title:'Android Development',course_instructor:'Cutting Edge',course_category:'Computer Science',course_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.',
				course_students:'10',course_price:'FREE',course_ratings:'4.5',course_image:'course_2.png'},
				{course_title:'cloud Development',course_instructor:'Cutting Edge',course_category:'Computer Science',course_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.',
				course_students:'10',course_price:'FREE',course_ratings:'4.5',course_image:'course_3.png'},
				{course_title:'Web Development',course_instructor:'Cutting Edge',course_category:'Computer Science',course_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.',
				course_students:'10',course_price:'FREE',course_ratings:'4.5',course_image:'course_1.jpeg'},
				{course_title:'Android Development',course_instructor:'Cutting Edge',course_category:'Computer Science',course_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.',
				course_students:'10',course_price:'FREE',course_ratings:'4.5',course_image:'course_2.png'}
			];
			function myfunction()
			{
				var filterArray=[{}];
				var searchItem=document.querySelector('#firstInput').value.toUpperCase();
				for(var i=0;i<database.length;i++)
				{
					var course_title=database[i].course_title.toUpperCase();
					if(course_title.includes(searchItem))
					{
						filterArray.push(database[i]);
					}
				}
				for(var i=1;i<filterArray.length;i++)
				{
		
					var row_courses=document.querySelector(".courses_row");
					var outer_div=document.createElement("div");outer_div.className="col-lg-4 course_col";
					row_courses.appendChild(outer_div);
                    

					var outer_div_element=document.querySelector(".course_col");
					var course_div=document.createElement("div");course_div.className="course";
					outer_div_element.appendChild(course_div);

					
					var course_div_element=document.querySelector(".course");
					var course_image_div=document.createElement("div");course_image_div.className="course_image";
					course_div_element.appendChild(course_image_div);


					var course_image=document.createElement("img");
                    course_image.src='images/'+ filterArray[i].course_image;
                    
					var course_image_div_element=document.querySelector(".course_image");
					course_image_div_element.appendChild(course_image);


                    var course_body_div=document.createElement("div");course_body_div.className="course_body"; 
                    course_div_element.appendChild(course_body_div);
                    var course_body_div_element=document.querySelector(".course_body");     

                    var course_title_div=document.createElement("div");course_title_div.className="course_title";
                    course_body_div_element.appendChild(course_title_div);
                    var course_title_div_element=document.querySelector(".course_title");


					var course_title=document.createElement("a");
                    var course_title_text=document.createTextNode(filterArray[i].course_title);
                    course_title.append(course_title_text);
                    course_title.href="course.html";
                    
					course_title_div_element.appendChild(course_title);



				}
				
			}