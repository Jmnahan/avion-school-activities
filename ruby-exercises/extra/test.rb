class PaintPrinter
  def print(paint)
    puts "This came from #{self.class}"
  end
end

class PaperPrinter
  def print(paper)
    puts "This came from #{self.class}"
  end
end

PAINTERS = {
  'paint' => PaintPrinter, 
  'paper' => PaperPrinter
}

class Painter
  def print(type)
    PAINTERS[type].new().print()
  end
end  

p = Painter.new
p.print('paper')
