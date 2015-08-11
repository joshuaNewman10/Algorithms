def count_vowels(str):
    char_list = list(str.lower())
    vowel_count = {}
    vowels = {'a': True, 'e': True, 'i': True, 'o': True, 'u': True}

    def inner_function(chars, index):
        if (index >= len(chars)):
            return
        char = chars[index]
        if (char in vowels):
            vowel_count[char] = vowel_count[char] + 1 if char in vowel_count else 1
        inner_function(chars, index + 1)
    inner_function(char_list, 0)
    return vowel_count


def count_vowels_alt(input_str, index=0, vowel_count={}):
    if isinstance(input_str, str):
        input_str = list(input_str.lower())
    vowels = {'a': True, 'e': True, 'i': True, 'o': True, 'u': True}
    if (index >= len(input_str)):
        return vowel_count
    char = input_str[index]
    if (char in vowels):
        vowel_count[char] = vowel_count[char] + 1 if char in vowel_count else 1
    return count_vowels_alt(input_str, index + 1, vowel_count)

print(count_vowels_alt('helloworld'))
