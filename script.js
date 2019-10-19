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
			$("#palindrome-message").removeClass();
            $("#palindrome-message").addClass("message-green");
        } else {
			$("#result").append("NOT a palindrome");
			$("#palindrome-message").removeClass();
            $("#palindrome-message").addClass("message-red");
        }

        $("#palindrome-message").show();

    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
