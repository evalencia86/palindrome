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
            palindrome-message = "a palindrome."
        } else {
            $("#palindrome-message")= "NOT a palindrome."
        }

        $("#palindrome-message").show();
    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
