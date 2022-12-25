# frozen_string_literal: true

# display person
class Person
  def initialize(name, age, height)
    @name = name
    @age = age
    @height = height
  end

  def display_info
    puts "#{@name} is #{@age} years old and he is #{@height}ft tall"
  end
end

p = Person.new('Werns', 70, 2)
p.display_info
