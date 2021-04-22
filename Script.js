let block = document.getElementById("block");

block.onmousedown = function(event) {

    let shiftX = event.clientX - block.getBoundingClientRect().left;
    let shiftY = event.clientY - block.getBoundingClientRect().top;
    block.style.position = 'absolute';
    //document.body.append(block);
  
    function moveAt(pageX, pageY) {
      block.style.left = pageX - shiftX + 'px';
      block.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    block.onmouseup = function() {
      block.onmouseup = null;
      document.removeEventListener('mousemove', onMouseMove);
    };
  };
  
  block.ondragstart = function() {
    return false;
  };