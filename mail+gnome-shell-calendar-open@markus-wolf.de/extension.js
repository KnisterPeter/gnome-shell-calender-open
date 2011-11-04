/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */
const Gio = imports.gi.Gio;

function init() {
}

function enable() {
  let calendarSettings = new Gio.Settings({ schema: 'org.gnome.desktop.default-applications.office.calendar' });
  calendarSettings.set_string('exec', '/usr/bin/x-www-browser https://www.google.com/calendar');
  calendarSettings.set_boolean('needs-term', false);
}

function disable() {
  let calendarSettings = new Gio.Settings({ schema: 'org.gnome.desktop.default-applications.office.calendar' });
  calendarSettings.reset('exec');
  calendarSettings.reset('needs-term');
}

