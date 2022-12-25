# frozen_string_literal: true

# testing private method
class TestingMethods
  def method1
    puts 'method1: public'
  end

  def test
    method2
  end

  def method2
    puts 'method2: private'
  end

  private :method2
end

TestingMethods.new.method1
TestingMethods.new.test
