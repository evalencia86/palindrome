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
			$("#palindrome-message").toggleClass("message-green");
			$("#result").text("is a palindrome.");
        } else {
			$("#palindrome-message").toggleClass("message-red");
			$("#result").text("is NOT a palindrome";
            
        }

        $("#palindrome-message").show();

    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
