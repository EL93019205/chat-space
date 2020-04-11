require 'rails_helper'

describe MessagesController do
  let(:group) { create(:group) }
  let(:user) { create(:user) }
  describe '#create' do
    context 'ログインしている場合' do
      it '@messageに期待した値が入っていること' do
      end
      it '@groupに期待した値が入っていること' do
      end
      it 'index.html.erbに遷移すること' do
      end
    end
    
    context 'ログインしていない場合' do
      it 'ログイン画面にリダイレクトすること' do
      end
    end
  end
end

