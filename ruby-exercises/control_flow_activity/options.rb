# frozen_string_literal: true

loop do
  puts 'Options: a/b/c/d/STOP '
  print ' '
  choice = gets.chomp
  case choice
  when 'a'
    puts 'Hey!'
  when 'b'
    puts 'How are you?'
  when 'c'
    puts 'Are you enjoying ruby?'
  when 'd'
    puts 'Yeahhh?'
  end
  break unless choice != 'STOP'
end
