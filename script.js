$(function () {

    $("#word").keyup(function () {
        const inputWord = $(this).val();

        if (!inputWord.trim()) {
            // Input is empty
            $("#palindrome-message").hide();
            return
        }

        $("#query").text(inputWord);

        if (isPalindrome(inputWord)) {
			$("#result").append("a palindrome");
            $("#palindrome-message").addClass("message-green");
        } else {
            $("#palindrome-message").append("NOT a palindrome.")
			$("#result").add("message-red");
        }

        $("#palindrome-message").show();

    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
