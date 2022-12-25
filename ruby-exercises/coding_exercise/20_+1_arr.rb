# frozen_string_literal: true

print 'Enter numbers: '
arr = gets.chomp.to_s.delete(' ')

def up_array(arr)
  return nil unless arr.scan(/[-.]/).empty?
else
  (arr.to_i + 1).to_s.split('').inspect
end

puts up_array(arr)
