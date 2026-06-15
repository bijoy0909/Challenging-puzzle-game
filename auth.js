// Shared auth helpers

async function getCurrentUser() {
  const { data } = await supabaseClient.auth.getSession();
  return data.session ? data.session.user : null;
}

async function renderAuthStatus(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const user = await getCurrentUser();

  if (user) {
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .single();

    const name = (profile && profile.username) ? profile.username : user.email;

    el.innerHTML = `
      <span>${escapeHtml(name)}</span>
      <button class="btn btn-sm btn-outline" id="logoutBtn" data-i18n="logout_btn">Logout</button>
    `;
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      await supabaseClient.auth.signOut();
      window.location.href = 'index.html';
    });
  } else {
    el.innerHTML = `<a class="btn btn-sm btn-primary" href="login.html" data-i18n="login_btn">Login / Sign Up</a>`;
  }

  applyLang();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
