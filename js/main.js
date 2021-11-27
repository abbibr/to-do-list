$(document).ready(function(e)
{   
    let add = $("#plus");
    let input = $("#input");
    
    add.on({
        click: function()
        {
            let val = input.val();
            if(val == "")
            {
                alert("Empty!");
            }
            else
            {
                $(".texts").append(
                    "<div class='row'><li>"+val+"</li><i class='fas fa-check check1'></i><i class='fas fa-trash trash1'></i></div>"
                );

                $(".trash1").click(function()
                {
                    $(this).parent().remove();
                });

                $(".check1").click(function()
                {
                    $(this).parent().addClass('complete');
                });
            }

            input.val("");
        }
    });
});