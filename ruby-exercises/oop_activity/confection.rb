# frozen_string_literal: true

# inheritance activity
class Confection
  def prepare
    "Baking #{self.class} at 350 degrees for 25\n"
  end
end

# inheritance activity
class Cupcake < Confection
  def prepare
    "#{super} Applying frosting"
  end
end

# inheritance activity
class BananaCake < Confection
end

c = Cupcake.new
d = BananaCake.new
puts c.prepare
puts d.prepare
