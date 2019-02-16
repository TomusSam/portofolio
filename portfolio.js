<script type="text/javascript">
  $(document).ready(function(){
    $("#btn-toggle").click(function(){
        $("#projects").slideToggle(500);
});
$('.menu-toggle').click(function() {
  
  $('.navbar').toggleClass('navbar--open', 500);
  $(this).toggleClass('open');
  });
});

</script>
