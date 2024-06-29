$(function(){
    $("#e1, #e2, #e3, #e4, #e5, #e6, #e7, .pack3").hide();
    });
    
    $(function(){
    $("#e11").click(function(){
        $('#e1').show(function(){
            $('#e2, #e3, #e4, #e5, #e6, #e7, .pack3').hide();
        });
    
    });
    });

    $(function(){
        $("#e22").click(function(){
            $('#e2').show(function(){
                $('#e1, #e3, #e4, #e5, #e6, #e7, .pack3').hide();
            });
        
        });
        });

    $(function(){
        $("#e33").click(function(){
            $('#e4').show(function(){
                $('#e1, #e2, #e3, #e5, #e6, #e7, .pack3').hide();
            });
        
        });
        });

    $(function(){
        $("#e44").click(function(){
            $('#e3').show(function(){
                $('#e1, #e2, #e4, #e5, #e6, #e7, .pack3').hide();
            });
        
        });
        });

        $(function(){
            $("#e55").click(function(){
                $('#e5').show(function(){
                    $('#e1, #e2, #e3, #e4, #e6, #e7, .pack3').hide();
                });
            
            });
            });

            $(function(){
                $("#e66").click(function(){
                    $('#e6').show(function(){
                        $('#e1, #e2, #e3, #e4, #e5, #e7, .pack3').hide();
                    });
                
                });
                });

                $(function(){
                    $("#e77").click(function(){
                        $('#e7').show(function(){
                            $('#e1, #e2, #e3, #e4, #e5, #e6, .pack3').hide();
                        });
                    
                    });
                    });

                    $(function(){
                        $("#e88").click(function(){
                            $('.pack3').show(function(){
                                $('#e1, #e2, #e3, #e4, #e5, #e6, #e7').hide();
                            });
                        
                        });
                        });
    