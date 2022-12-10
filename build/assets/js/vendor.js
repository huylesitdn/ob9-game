$('#fullPage').fullpage({
  sectionSelector: '.item',
  // slideSelector: '.horizontal-scrolling',
  controlArrows: false,
  scrollOverflow: true,
  normalScrollElements: '.content__tnc',
  // more options here
  onLeave: function(index, nextIndex, direction){
    const has_cloud = $('.main').hasClass('has-cloud');
    const items_has_clound = ['.spins', '.prize', '.tnc'];
    $(items_has_clound[nextIndex]).toggleClass('active');
    $(items_has_clound[index]).toggleClass('active');
    if(nextIndex === 1)
    console.log(index, nextIndex, direction)
  },
});

console.log('====vendor')