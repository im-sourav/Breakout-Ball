function H() {
  this.A = function (e) {
    for (var f = 0; 24 > f; f++) this[String.fromCharCode(97 + f)] = e[f] || 0;
    0.01 > this.c && (this.c = 0.01);
    e = this.b + this.c + this.e;
    0.18 > e && ((e = 0.18 / e), (this.b *= e), (this.c *= e), (this.e *= e));
  };
}
var U = new (function () {
  this.z = new H();
  var e, f, d, h, j, w, I, J, K, y, k, L;
  this.reset = function () {
    var b = this.z;
    h = 100 / (b.f * b.f + 0.001);
    j = 100 / (b.g * b.g + 0.001);
    w = 1 - 0.01 * b.h * b.h * b.h;
    I = 1e-6 * -b.i * b.i * b.i;
    b.a || ((k = 0.5 - b.n / 2), (L = 5e-5 * -b.o));
    J = 1 + b.l * b.l * (0 < b.l ? -0.9 : 10);
    K = 0;
    y = 1 == b.m ? 0 : 2e4 * (1 - b.m) * (1 - b.m) + 32;
  };
  this.C = function () {
    this.reset();
    var b = this.z;
    e = 1e5 * b.b * b.b;
    f = 1e5 * b.c * b.c;
    d = 1e5 * b.e * b.e + 12;
    return 3 * (((e + f + d) / 3) | 0);
  };
  this.B = function (b, M) {
    var a = this.z,
      N = 1 != a.s || a.v,
      o = 0.1 * a.v * a.v,
      O = 1 + 3e-4 * a.w,
      l = 0.1 * a.s * a.s * a.s,
      V = 1 + 1e-4 * a.t,
      W = 1 != a.s,
      X = a.x * a.x,
      Y = a.g,
      P = a.q || a.r,
      Z = 0.2 * a.r * a.r * a.r,
      B = a.q * a.q * (0 > a.q ? -1020 : 1020),
      Q = a.p ? ((2e4 * (1 - a.p) * (1 - a.p)) | 0) + 32 : 0,
      $ = a.d,
      R = a.j / 2,
      aa = 0.01 * a.k * a.k,
      C = a.a,
      D = e,
      ba = 1 / e,
      ca = 1 / f,
      da = 1 / d,
      a = (5 / (1 + 20 * a.u * a.u)) * (0.01 + l);
    0.8 < a && (a = 0.8);
    for (
      var a = 1 - a,
      E = !1,
      S = 0,
      s = 0,
      t = 0,
      z = 0,
      q = 0,
      u,
      r = 0,
      g,
      m = 0,
      p,
      F = 0,
      c,
      T = 0,
      n,
      G = 0,
      A = Array(1024),
      v = Array(32),
      i = A.length;
      i--;

    )
      A[i] = 0;
    for (i = v.length; i--;) v[i] = 2 * Math.random() - 1;
    for (i = 0; i < M; i++) {
      if (E) return i;
      Q && ++T >= Q && ((T = 0), this.reset());
      y && ++K >= y && ((y = 0), (h *= J));
      w += I;
      h *= w;
      h > j && ((h = j), 0 < Y && (E = !0));
      g = h;
      0 < R && ((G += aa), (g *= 1 + Math.sin(G) * R));
      g |= 0;
      8 > g && (g = 8);
      C || ((k += L), 0 > k ? (k = 0) : 0.5 < k && (k = 0.5));
      if (++s > D)
        switch (((s = 0), ++S)) {
          case 1:
            D = f;
            break;
          case 2:
            D = d;
        }
      switch (S) {
        case 0:
          t = s * ba;
          break;
        case 1:
          t = 1 + 2 * (1 - s * ca) * $;
          break;
        case 2:
          t = 1 - s * da;
          break;
        case 3:
          (t = 0), (E = !0);
      }
      P && ((B += Z), (p = B | 0), 0 > p ? (p = -p) : 1023 < p && (p = 1023));
      N && O && ((o *= O), 1e-5 > o ? (o = 1e-5) : 0.1 < o && (o = 0.1));
      n = 0;
      for (var ea = 8; ea--;) {
        m++;
        if (m >= g && ((m %= g), 3 == C))
          for (u = v.length; u--;) v[u] = 2 * Math.random() - 1;
        switch (C) {
          case 0:
            c = m / g < k ? 0.5 : -0.5;
            break;
          case 1:
            c = 1 - 2 * (m / g);
            break;
          case 2:
            c = m / g;
            c = 6.28318531 * (0.5 < c ? c - 1 : c);
            c = 1.27323954 * c + 0.405284735 * c * c * (0 > c ? 1 : -1);
            c = 0.225 * ((0 > c ? -1 : 1) * c * c - c) + c;
            break;
          case 3:
            c = v[Math.abs(((32 * m) / g) | 0)];
        }
        N &&
          ((u = r),
            (l *= V),
            0 > l ? (l = 0) : 0.1 < l && (l = 0.1),
            W ? ((q += (c - r) * l), (q *= a)) : ((r = c), (q = 0)),
            (r += q),
            (z += r - u),
            (c = z *= 1 - o));
        P && ((A[F % 1024] = c), (c += A[(F - p + 1024) % 1024]), F++);
        n += c;
      }
      n *= 0.125 * t * X;
      b[i] = 1 <= n ? 32767 : -1 >= n ? -32768 : (32767 * n) | 0;
    }
    return M;
  };
})();
window.jsfxr = function (e) {
  U.z.A(e);
  var f = U.C(),
    e = new Uint8Array(4 * (((f + 1) / 2) | 0) + 44),
    f = 2 * U.B(new Uint16Array(e.buffer, 44), f),
    d = new Uint32Array(e.buffer, 0, 44);
  d[0] = 1179011410;
  d[1] = f + 36;
  d[2] = 1163280727;
  d[3] = 544501094;
  d[4] = 16;
  d[5] = 65537;
  d[6] = 44100;
  d[7] = 88200;
  d[8] = 1048578;
  d[9] = 1635017060;
  d[10] = f;
  for (
    var f = f + 44,
    d = 0,
    h = "data:audio/wav;base64,",
    x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    d < f;
    d += 3
  )
    var j = (e[d] << 16) | (e[d + 1] << 8) | e[d + 2],
      h = h + (x[j >> 18] + x[(j >> 12) & 63] + x[(j >> 6) & 63] + x[j & 63]);
  return h;
};

// -----------------------------------------------------------

let keys = {
  do: 261.6,
  re: 293.71,
  mi: 329.6
}
const actx = new (AudioContext || webkitAudioContext || window.webkitAudioContext)();
function playNote(key, duration) {
  const osc = actx.createOscillator();
  osc.frequency.value = key;
  osc.start(actx.currentTime);
  osc.stop(actx.currentTime + duration / 1000);

  const envelope = actx.createGain();
  osc.connect(envelope);
  osc.type = "triangle";
  envelope.connect(actx.destination);
  envelope.gain.setValueAtTime(0, actx.currentTime);
  envelope.gain.linearRampToValueAtTime(0.5, actx.currentTime + 0.1);
  envelope.gain.linearRampToValueAtTime(0, actx.currentTime + duration / 1000);
  setTimeout(() => {
    osc.disconnect();
  }, duration);
}

function playMelody(array) {
  if (array.length < 1) return;

  this.ary = [...array];
  let pd = this.ary.shift();
  playNote(pd[0], pd[1]);
  setTimeout(() => {
    playMelody(this.ary);
  }, pd[1]);
}

const win = [
  [keys.mi, 300],
  [keys.re, 150],
  [keys.do, 300],
  [keys.re, 150],
  [keys.mi, 600],
]

/* --------------------------------------------------------- */
const fxr = jsfxr;


const destroy = new Audio(
  fxr([3, 0, 0.2731787124636847, 0.6019919055473164, 0.05335428609505111, 0.6685079624840767, 0, -0.268412890473085, 0, 0, 0, 0, 0, 0, 0, 0, 0.24704795267662266, -0.0010385587566819952, 1, 0, 0, 0, 0, 0.5])
)
destroy.volume = 0.3;

const hitWall = new Audio(
  fxr([2, 0.0102, 0.066, 0.539, 0.1037, 0.239, , -0.189, -0.322, , , 0.8999, , , , , , , 1, , , , , 1])
)
hitWall.volume = 1;


const gover = new Audio(fxr([0, 0.9408747199525219, 0.8031085164414439, 0.11520888487543071, -0.35745939416942996, 0.31094305790904, 0, -0.005937826564703021, -0.11481290035834447, 0.7533024392429083, 0.9215718815522451, 0.9212322489248965, -0.8555183998782407, -0.0010780282204563285, 0.01643345635699415, 0.9754966213364451, 0.06645935463900163, -0.25834502086152367, 0.8224944445334001, -0.16892960852624672, -0.09880392442171715, 0.3667231237721199, -0.002681059415775115, 0.5]))
gover.volume = 1;


const padHit = new Audio(fxr([1, 0, 0.8656656258704496, 0.8881699569692161, 0.3337486670673731, 0.13615778746815113, 0, 0, 0, 0, 0, 0, 0.4540498195226259, 0.04883248804931006, 0, 0, 0, 0, 0.16455914339764943, -0.13088784496088035, 0.03741797307964889, 0.32272025179073904, 0, 0.5]))
padHit.volume = 1;

const winLevel = new Audio(
  fxr([1, -0.028285759719238482, 0.615274254196802, -0.004125262675040438, 0.6379160401089252, 0.24680233607196622, 0, 0.0386388781938549, -0.013054640536478729, 0.040999429109049794, -0.06950051393695891, 0.8005839313552551, 0.5173386588030348, 0.11782793310567884, -0.04762074561593328, -0.023787917707044123, 0.014770134532155116, -0.09624799339299436, 0.7511381525116605, -0.35591752304635144, -0.028278839672854206, 0.07150227695539726, -0.0638454547831803, 0.5])
);
winLevel.volume = 1;


const point = new Audio(
  fxr([0, 0.7066407597099349, 0.009397808027700598, 0.002896048255373106, 0.9173895017908764, 0.029094055056602005, 0, 0.6879038698042219, -0.016091009776331246, -0.8454161086010666, -0.8760050974242466, -0.8976791198980134, -0.6514006063569089, -0.32035517653390055, -0.02626749738370332, 0.5149329893035941, 0.00019756750377706003, -0.1657202113404497, 0.7520483994492606, -0.8772732913494717, 0.9795248743207856, 0.28150531003690604, 0.0024018892262257017, 1]))
point.volume = 1;

const death = new Audio(
  fxr([0, 0, 0.962846403849094, 0.2509507171809999, 0.911206040945938, 0.19255692561524382, 0, 0, 0, 0, 0, 0, 0.8914785273122342, 0.5731390851889171, 0, 0, 0, 0, 0.21690619953980544, -0.15692520215284977, 0.8898730458441626, 0, 0, 0.1]))
death.volume = 0.1;

let audioMuted = false;

const Sounds = {
  destroy() {
    !audioMuted && destroy.play()
    destroy.currentTime = 0;
  },
  hitWall() {
    !audioMuted && hitWall.play()
    hitWall.currentTime = 0;
  },
  death() {
    !audioMuted && death.play()
    death.currentTime = 0;
  },
  win() {
    !audioMuted && playMelody(win);
  },
  padHit() {
    !audioMuted && padHit.play()
    padHit.currentTime = 0;
  },
  gameOverAudio() {
    !audioMuted && gover.play()
    gover.currentTime = 0;
  },
  point() {
    !audioMuted && point.play();
    point.currentTime = 0;
  }
}

const backgroundAudio = new Audio()

backgroundAudio.src = "src/audio/back.mp3";
backgroundAudio.volume = 0.1; 
document.addEventListener("click", () => {
  backgroundAudio.play();
  backgroundAudio.loop = true;
}, { once: true });
