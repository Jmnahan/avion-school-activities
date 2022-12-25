# frozen_string_literal: true

print 'comment: '
str = gets.chomp

def troll_comment(str)
  str.gsub(/[aeiou]/i, '')
end

puts troll_comment(str)
