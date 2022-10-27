// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
//   }
// }

// // Show filtered elements
// function AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("filterContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

function searchFunction() {
    // Declare variables
    var input, filter, searchItems, searchDiv, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    searchItems = document.getElementById("searchItems");
    searchDiv = searchItems.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < searchDiv.length; i++) {
    //   imgTag = searchDiv[i].getElementsByTagName("img");
    //   for (i = 0; i < imgTag.length; i++) {
    //         if (imgTag.classList.contains(filter)) {
    //           searchDiv[i].style.display = "";
    //         } else {
    //         searchDiv[i].style.display = "none";
    //         }
    //   }
    
        a = searchDiv[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          searchDiv[i].style.display = "block";
        } else {
          searchDiv[i].style.display = "none";
        }
    }
  }

  var imageEls = document.getElementsByTagName("img");
  //Iterating
  for(var i=0;i<imageEls.length;i++){
     imageEls[i].title=imageEls[i].alt;
  }

  // imgBlock = document.querySelectorAll(".filterDiv")

  // imgBlock.forEach(item => { 
  //   item.addEventListener('click', () => {
  //     item.style.transform = "scale(2.5)";
  //     item.style.zIndex = "999";
  //     item.style.position = "absolute";
  //     item.style.top = "400px";
  //     item.style.left = "870px";
  //     console.log("working")
  //     setTimeout(function(){

  //       item.style.transform = "scale(1)";
  //       item.style.position = "relative";

  //     },5000); 
  //     console.log("working")

  //   })
    
  // });


  // const labelToggle = document.getElementById("setLabel");
  // var imgSets = document.querySelectorAll(".imgSet");
  // let imgSetWork = document.getElementById("Work");
  
  // const workWord = "HELLOW"

  // labelToggle.addEventListener('change', () => {
  //   // imgSetWork.style.setProperty('content', workWord);
  //   let workBefore = window.getComputedStyle(imgSetWork,"::before");
  //   workBefore.style.content('--imgSetWork', workWord)
  //   console.log("it worked")
  // });

  // // labbleToggle.addEventListener('change', () => {
  // //   if (labelToggle.checked) {
  // //     imgSets.forEach(item => {
  // //       let imgSet = window.getComputedStyle(imgSets, "::before");
  // //       imgSet.style.content("");
  // //     }
  // //   }
  // //   }
  // // )
