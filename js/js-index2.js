<script>
                    window.onscroll = function(){
                        scroll()
                    }
                    function scroll(){
                         btn = document.getElementById('btnTop')
                        if(document.documentElement.scrollTop > 100){
                            btn.style.display = 'block'

                        } else{
                            btn.style.display = 'none'
                        }
                    }
                    function backToTop(){
                        document.documentElement.scrollTop = 0
                    }
</script>