# frozen_string_literal: true

describe 'reverse_alternate' do
  it 'should reverse every other word in the given string' do
    expect(reverse_alternate("Did it work?")).to eq ("Did ti work?")
    expect(reverse_alternate("Are we there yet?")).to eq ("Are ew there ?tey")
  end
end

def reverse_alternate(sentence)
  sentence.split(" ").map.with_index{|w,i| i.odd? ? w.reverse : w }.join(" ")
end