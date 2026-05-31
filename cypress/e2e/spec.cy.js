describe('E2E Toko Online System Test', () => {
  it('Berhasil menampilkan produk dan keranjang di halaman utama', () => {
    cy.visit('http://localhost:8000');

    cy.contains('Toko Online').should('be.visible');
    cy.get('input[name="cari"]').should('be.visible');

    cy.get('input[name="cari"]').type('Kemeja{enter}');
    cy.contains('Kemeja Flanel').should('be.visible');
  });
});
