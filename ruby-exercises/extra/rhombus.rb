class Rhombus
  def initialize(diagonal1, diagonal2)
    @diagonal1, @diagonal2 = diagonal1, diagonal2
  end

  def area
    (@diagonal1 * @diagonal2) * 0.5
  end
end

r = Rhombus.new(5, 5)
puts r.area