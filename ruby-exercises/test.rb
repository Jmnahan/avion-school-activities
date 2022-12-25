# puts self # main scope

class Human
  attr_accessor :name

  # puts self # class scope

  def initialize(name)
    @name = name
  end

  def self.all
    puts self
  end

  def print_name
    # puts "my name is #{self.name}" # instance scope
    # puts self.name
  end

  def capitalize_name
    puts self.print_name 
  end
end

human = Human.new("Test")
human.print_name