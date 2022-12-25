# frozen_string_literal: true

# display person's name
class Person
  def initialize(name, last_name, company)
    @name = name
    @last_name = last_name
    @company = company
  end

  def display_info
    puts "Printing name: #{@name} #{@last_name}"
    puts "Company name: #{@company}"
  end
end

# email generator
class EmailGenerator
  def initialize(name, last_name, company)
    @name = name
    @last_name = last_name
    @company = company
  end

  def generate_email
    puts "#{@name.downcase.delete(' ')}#{@last_name.downcase.delete(' ')}@#{@company.downcase.delete(' ')}.com"
  end
end

o = Person.new('Juan', 'Dela Cruz', 'Meralco')
o.display_info
p = EmailGenerator.new('Juan', 'Dela Cruz', 'Meralco')
p.generate_email
