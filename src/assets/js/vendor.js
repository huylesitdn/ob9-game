$('#fullPage').fullpage({
  sectionSelector: '.item',
  // slideSelector: '.horizontal-scrolling',
  controlArrows: false,
  // more options here
  onLeave: function(index, nextIndex, direction){
    const has_cloud = $('.main').hasClass('has-cloud');
    if(nextIndex === 3 && !!has_cloud) {
      $('.main').removeClass('has-cloud')
    } else {
      $('.main').addClass('has-cloud')
    }
    // console.log(index, nextIndex, direction)
  },
});

console.log('====vendor')