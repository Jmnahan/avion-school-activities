# frozen_string_literal: true

print 'Enter word: '
word = gets.chomp

def letter_counter(word)
  word.downcase.gsub(/[^a-z0-9]/i, '').each_char.tally
end

puts letter_counter(word)
