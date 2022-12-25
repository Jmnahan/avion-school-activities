# frozen_string_literal: true

print 'year: '
year = gets.chomp.to_i

def century_year(year)
  if (year % 100).zero?
    # year.to_s.chars.first(2).join.to_i
    year / 100
  else
    # year.to_s.chars.first(2).join.to_i + 1
    (year - (year % 100)) / 100 + 1
  end
end

puts century_year(year)
