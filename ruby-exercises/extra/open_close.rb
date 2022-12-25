class EmailGenerator
  def initialize(name, lastname, company)
    @name, @lastname, @company = name, lastname, company
  end

  def generate_email
    "#{@name.downcase.delete(' ')}#{@lastname.downcase.delete(' ')}@#{@company.downcase.delete(' ')}.com"
  end
end

class ProbiEmailGenerator < EmailGenerator
  def generate
    "#{@name.downcase.delete(' ')}#{@lastname.downcase.delete(' ')}@gmail.com"
  end
end

p = EmailGenerator.new('Juan', 'Cruz', 'Meralco')
puts p.generate_email
m = ProbiEmailGenerator.new('Juan', 'Cruz', 'Meralco')
puts m.generate