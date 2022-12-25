class EmailGenerator
  def initialize(name, lastname, company, position)
    @name, @lastname, @company, @position = name, lastname, company, position
  end

  def generate_email
    "#{@name.downcase.delete(' ')}#{@lastname.downcase.delete(' ')}@#{@company.downcase.delete(' ')}.com"
  end
end

class RegularEmailGenerator < EmailGenerator
  def generate
    "#{@name.downcase.delete(' ')}#{@lastname.downcase.delete(' ')}@#{@company.downcase.delete(' ')}#{@position.downcase.delete(' ')}.com"
  end
end

class ProbiEmailGenerator < EmailGenerator
  def generate
    "#{@name.downcase.delete(' ')}#{@lastname.downcase.delete(' ')}@gmail.com"
  end
end

l = EmailGenerator.new('Juan', 'Cruz', 'Meralco', '')
puts l.generate_email
n = RegularEmailGenerator.new('Maria', 'Clara', 'Meralco', 'Engineer')
puts n.generate
m = ProbiEmailGenerator.new('Ramon', 'Gomez', '', '')
puts m.generate
