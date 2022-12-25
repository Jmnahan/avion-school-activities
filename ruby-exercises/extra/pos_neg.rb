print "Enter numbers: "
nums = gets.chomp.split(" ").map(&:to_f)
pos = []
neg = []
total = []

nums.each do |x|
  if x > 0
    pos.push(x)
  else 
    neg.push(x)
  end

  psum = pos.sum
  nsum = neg.sum
  total << psum
  total << nsum
end

print total.last(2)
