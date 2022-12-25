print "Word: "
word = gets.chomp

def check_isogram(word)
  word.downcase!
  ('a'..'z').each do |letter|
    return false if word.count(letter) > 1
  end
  return true
end

puts check_isogram(word)