# frozen_string_literal: true

print 'text: '
text = gets.chomp

def encode(text)
  text.gsub(/[aeiouAEIOU]/, 'a' => 1, 'e' => 2, 'i' => 3, 'o' => 4, 'u' => 5, 'A' => 1,
                            'E' => 2, 'I' => 3, 'O' => 4, 'U' => 5)
end

def decode(text)
  text.gsub(/[12345]/, 1 => 'a', 2 => 'e', 3 => 'i', 4 => 'o', 5 => 'u')
end

puts encode(text)
puts decode(text)
