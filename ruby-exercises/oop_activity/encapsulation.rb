# frozen_string_literal: true

# printing dnd class and profession
class DndCharacter
  def initialize(cname, profession)
    @cname = cname
    @profession = profession
  end

  def info
    "Class: #{@cname}, Profession: #{@profession}"
  end
end

p = DndCharacter.new('Gnome', 'Farmer')
puts p.info
