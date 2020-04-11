require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'messageを保存できる場合' do
      it 'contentがあれば保存できること' do
      end
      it 'imageがあれば保存できること' do
      end
      it 'content と imageがあれば保存できること' do
      end
    end
    
    context 'messageを保存できない場合' do
      it 'contentとimageが両方空だと保存できないこと' do
      end
      it 'group_idが無いと保存できないこと' do
      end
      it 'user_idが無いと保存できないこと' do
      end
    end
  end
end

