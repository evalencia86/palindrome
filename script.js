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
            // $("#palindrome-message").append("a palindrome");
			$("#palindrome-message").addClass("message-blue");
        } else {
            // $("#palindrome-message").append("NOT a palindrome.")
			$("#palindrome-message").add("message-red");
        }

        $("#palindrome-message").show();

    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
