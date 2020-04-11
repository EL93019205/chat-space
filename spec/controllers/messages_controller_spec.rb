require 'rails_helper'

describe MessagesController do
  let(:group) { create(:group) }
  let(:user) { create(:user) }
  describe '#create' do
    context 'ログインしている場合' do
      before do
        login user
        get :index, params: { group_id: group.id }
      end

      it '@messageに期待した値が入っていること' do
      end
      it '@groupに期待した値が入っていること' do
      end
      it 'index.html.erbに遷移すること' do
      end
    end
    
    context 'ログインしていない場合' do
      before do
        get :index, params: { group_id: group.id }
      end
      it 'ログイン画面にリダイレクトすること' do
      end
    end
  end
end

