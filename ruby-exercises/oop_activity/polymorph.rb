# frozen_string_literal: true

# polymorphism example
class Document
  def initialize(title)
    @title = title
  end
end

# polymorphism example
class PDF < Document
  def print
    puts "Printing PDF, title: #{@title}"
  end
end

# polymorphism example
class Word < Document
  def print
    puts "Printing Word, title: #{@title}"
  end
end

Word.new('Ruby-Word').print
PDF.new('Ruby-PDF').print
