$(function()
{
    let add = $("#taskAdd");
    let close = $(".btn");
    let inputTask = $("#textInput");

    add.on({
        click: function()
        {
            $("#text").css("display","none");
            let val = inputTask.val();

            $(".text").append(
                "<li class='list'>"+val+"<button class='btn'>&times;</button></li>"
            );

            $(".btn").click(function()
            {
                $(this).parent().remove();
            });

            inputTask.val("");
        }
    });
});