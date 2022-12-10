const items_has_clound = ['.spins', '.prize', '.tnc'];

$('#fullPage').fullpage({
  sectionSelector: '.item',
  // slideSelector: '.horizontal-scrolling',
  controlArrows: false,
  scrollOverflow: true,
  normalScrollElements: '.content__tnc',
  // more options here
  onLeave: function(index, nextIndex, direction){
    $(items_has_clound[nextIndex]).toggleClass('active');
    $(items_has_clound[index]).toggleClass('active');
    // alert(index, nextIndex, direction)
  },
  // afterLoad: function(anchorLink, index){},
});

console.log('====vendor')