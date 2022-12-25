# frozen_string_literal: true

# email generator
class EmailGenerator
  def initialize(firstname, lastname, company)
    @firstname = firstname
    @lastname = lastname
    @company = company
  end

  def generate(type)
    puts "#{@firstname.downcase.split.first}#{@lastname.downcase.split.first}@#{type.generate}.com"
  end
end

# holding generator
class HoldingEmailGenerator < EmailGenerator
  def generate
    "#{@company.downcase.delete(' ')}.com"
  end
end

# agency generator
class AgencyEmailGenerator < EmailGenerator
  def generate
    'gmail.com'
  end
end

o = EmailGenerator.new('Maria Clara', 'Santos', 'test')
p = AgencyEmailGenerator.new('Maria Clara', 'Santos', 'test')
o.generate(p)

q = EmailGenerator.new('Juan', 'Cruz', 'Meralco')
r = HoldingEmailGenerator.new('Juan', 'Cruz', 'Meralco')
q.generate(r)
