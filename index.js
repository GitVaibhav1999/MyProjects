
//  -------- pre declarations --------

var unordered_list = document.getElementById('list');
var add_todo = document.getElementById('add');
var remove_todo = document.getElementById('remove');
var removeAll_todo = document.getElementById('removeall');
var listItem = unordered_list.children;
var input = document.getElementById('input')



// --------  Funtion to add ToDo --------

1
 add_todo.addEventListener('click', addItem);

function addItem() {


   var item = input.value;
   var textnode = document.createTextNode(item);

   if (item == '') {

      empty = document.createElement('p');
      node = document.createTextNode("Please Enter Something");
      return empty.appendChild(node);
   } else {

      // create li

      li = document.createElement('li');

      // create checkbox

      var checkbox = document.createElement('input')
      checkbox.type = 'checkbox';
      checkbox.setAttribute('id', 'check');

      // create label

      var label = document.createElement('label');

      //add these elements on Webpage

      unordered_list.appendChild(label);
      li.appendChild(checkbox);
      label.appendChild(textnode);
      li.appendChild(label);

      unordered_list.insertBefore(li, listItem[0]);

      setTimeout(() => {li.className = 'visual';},2)

      document.querySelector(".Wrapper").innerText = '';
   }


}

//    -------- Function to remove checked Todo --------

remove_todo.addEventListener('click', removeItem);

function removeItem() {




   for (let index = 0; index < listItem.length; index++) {

      while (listItem[index] && listItem[index].children[0].checked) {

         unordered_list.removeChild(listItem[index]);


      }
   }
}


//    --------  Remove Every Thing --------


   removeAll_todo.addEventListener('click',all);

    function all() {

      if(window.confirm('Want to delete everything ?'))
      {
      while(unordered_list.hasChildNodes())
        {
          unordered_list.removeChild(list.firstChild);

        }
     }
   }
