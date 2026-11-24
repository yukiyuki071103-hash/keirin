// Firebaseの設定（Firebaseコンソール → プロジェクトの設定 → マイアプリ で表示される値を貼り付けます）
// ここに書く値はサイトを見た人にも見えますが、それで問題ありません。
// データの安全は firestore.rules（セキュリティルール）で守ります。
window.KEIRIN_FIREBASE_CONFIG = {
  apiKey: "ここにapiKey",
  authDomain: "ここに.firebaseapp.com",
  projectId: "ここにprojectId",
  storageBucket: "",
  messagingSenderId: "",
  appId: "ここにappId"
};
