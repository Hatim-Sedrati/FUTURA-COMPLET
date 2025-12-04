// Composant qui affiche une grille de fond subtile
export default function BackgroundGrid() {
  return (
    // Utilisez un conteneur qui s'étire sur toute la fenêtre d'affichage (Viewport)
    // Ce composant ne contient plus l'animation Threads — Threads sera rendu dans le hero
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Grille de fond SVG uniquement (subtile, transparente) */}
      <svg
        className="fixed inset-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 1%, rgba(100, 50, 150, 0.04) 25%, rgba(100, 50, 150, 0.02) 26%, transparent 27%, transparent 74%, rgba(100, 50, 150, 0.03) 75%, rgba(100, 50, 150, 0.03) 76%, transparent 77%, transparent),
                           linear-gradient(90deg, transparent 14%, rgba(100, 50, 150, 0.02) 25%, rgba(100, 50, 150, 0.03) 26%, transparent 27%, transparent 74%, rgba(100, 50, 150, 0.03) 75%, rgba(100, 50, 150, 0.03) 76%, transparent 77%, transparent)`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
